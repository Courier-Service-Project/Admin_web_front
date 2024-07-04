import Swal from "sweetalert2";

export default function Notify(props) {
  Swal.fire({
    position: "center",
    icon: props.icon,
    title: props.title,
    text: props.text,
    timer: 4500,
  });
}
