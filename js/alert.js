/* ==========================================================================
   Nevex Tech IT — common alert helpers
   Wraps self-hosted SweetAlert2 (js/sweetalert2.min.js) in a reusable, branded
   API so any page can show attractive success / error / confirm / toast alerts.

   Add to any page (after js/sweetalert2.min.js):
       <link rel="stylesheet" href="css/sweetalert2.min.css">
       <script src="js/sweetalert2.min.js"></script>
       <script src="js/alert.js"></script>

   Usage:
       NEVEAlert.success('Message sent!', 'We will reply within one business day.');
       NEVEAlert.error('Something went wrong', 'Please try again.');
       NEVEAlert.info('Heads up', 'Enrollment closes soon.');
       NEVEAlert.warning('Heads up', 'Please review before continuing.');
       NEVEAlert.toast('Saved successfully');
       NEVEAlert.confirm('Are you sure?', 'This cannot be undone.')
         .then(function (result) { if (result.isConfirmed) { ... } });
   ========================================================================== */
window.NEVEAlert = (function () {
  'use strict';

  var theme = {
    background: '#fbf8f1',          // --bg
    color: '#13201c',               // --ink
    confirmButtonColor: '#0b2b24',  // --emerald
    cancelButtonColor: '#9aa39e',
    customClass: {
      popup: 'neve-swal',
      title: 'neve-swal-title',
      confirmButton: 'neve-swal-btn'
    }
  };

  function fire(opts) {
    var settings = Object.assign({}, theme, opts || {});
    if (opts && opts.customClass) {
      settings.customClass = Object.assign({}, theme.customClass, opts.customClass);
    }
    return Swal.fire(settings);
  }

  function success(title, text) {
    return fire({
      icon: 'success',
      title: title || 'Success!',
      text: text || '',
      confirmButtonText: 'Great'
    });
  }

  function error(title, text) {
    return fire({
      icon: 'error',
      title: title || 'Something went wrong',
      text: text || 'Please try again.',
      confirmButtonText: 'Got it'
    });
  }

  function info(title, text) {
    return fire({ icon: 'info', title: title || '', text: text || '' });
  }

  function warning(title, text) {
    return fire({
      icon: 'warning',
      title: title || 'Please check',
      text: text || ''
    });
  }

  function confirm(title, text, opts) {
    return fire(Object.assign({
      icon: 'warning',
      title: title || 'Are you sure?',
      text: text || '',
      showCancelButton: true,
      confirmButtonText: 'Yes, continue',
      cancelButtonText: 'Cancel'
    }, opts || {}));
  }

  function toast(title, icon) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      icon: icon || 'success',
      title: title || '',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#0b2b24',
      color: '#f6ecd7'
    });
  }

  return {
    fire: fire,
    success: success,
    error: error,
    info: info,
    warning: warning,
    confirm: confirm,
    toast: toast
  };
})();
