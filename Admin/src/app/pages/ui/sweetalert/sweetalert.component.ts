import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})

/**
 * UI sweetalert component
 */
export class SweetalertComponent implements OnInit {

  // bread crum items
  breadCrumbItems: Array<{}>;
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Sweetalert 2', active: true }];
  }
  basicMessage() {
    Swal.fire({
      title: 'Any fool can use a computer',
      confirmButtonColor: '#5438dc',
    });
  }

  titleText() {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      confirmButtonColor: '#5438dc'
    });
  }

  successmsg() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#5438dc',
      cancelButtonColor: '#ff3d60'
    });
  }

  position() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }

  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#ff3d60',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  cancel() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ml-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  }
  imageHeader() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'assets/images/logo-dark.png',
      imageHeight: 20,
      confirmButtonColor: '#5438dc',
      animation: false
    });
  }
  timer() {
    let timerInterval;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <strong></strong> seconds.',
      timer: 2000,

      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong').textContent = Swal.getTimerLeft() + '';
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer');
      }
    });
  }
  custom() {
    Swal.fire({
      title: '<i>HTML</i> <u>example</u>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//themesdesign.in/">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    });
  }
  customBackground() {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      confirmButtonColor: '#5438dc',
      background:
        '#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)'
    });
  }
  ajax() {
    Swal.fire({
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      confirmButtonColor: '#556ee6',
      cancelButtonColor: '#f46a6a',
      preConfirm: email => {
        // eslint-disable-next-line no-unused-vars
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (email === 'taken@example.com') {
              Promise.reject(new Error('This email is already taken.'));
            } else {
              resolve();
            }
          }, 2000);
        });
      },
      allowOutsideClick: false
    }).then(email => {
      Swal.fire({
        title: 'Ajax request finished!',
        html: 'Submitted email: ' + email
      });
    });
  }
  chain() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      confirmButtonColor: '#556ee6',
      cancelButtonColor: '#74788d',
      progressSteps: ['1', '2', '3']
    })
      .queue([
        {
          title: 'Question 1',
          text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
      ])
      .then(result => {
        if (result) {
          Swal.fire({
            title: 'All done!',
            html:
              'Your answers: <pre><code>' +
              JSON.stringify(result) +
              '</code></pre>',
            confirmButtonText: 'Lovely!'
          });
        }
      });
  }
  dynamicQueue() {
    const ipAPI = 'https://api.ipify.org?format=json';
    Swal.queue([
      {
        title: 'Your public IP',
        confirmButtonColor: '#5438dc',
        confirmButtonText: 'Show my public IP',
        text: 'Your public IP will be received ' + 'via AJAX request',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return fetch(ipAPI)
            .then(response => response.json())
            .then(data => Swal.insertQueueStep(data.ip))
            .catch(() => {
              Swal.insertQueueStep({
                title: 'Unable to get your public IP'
              });
            });
        }
      }
    ]);
  }
}
