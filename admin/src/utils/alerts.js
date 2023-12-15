import Swal from 'sweetalert2'

class Alert{
  constructor({Swal}){
    this.Swal = Swal;
  }

  confirmationAlert(title, icon){
    return Swal.fire({
      title: title,
      icon: icon,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  confirmDelete(item, func){
   return Swal.fire({
      title: `Delete ${item}`,
      text: `Are you sure you want to delete this ${item}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        func()
        Swal.fire({
          title: `Deleted ${item} successfully!`,
          icon: "success"
        });
      }
    });
  }
}

const AlertMod = new Alert({Swal})
export default AlertMod;