import Swal from "sweetalert2";
import { RadioInput } from "@/Constant";
import { Button } from "reactstrap";

const RadioInputBtn = () => {
  const displayAlert = async () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "#ff0000": "Red",
          "#00ff00": "Green",
          "#0000ff": "Blue"
        });
      }, 1000);
    });
    const { value: color } = await Swal.fire({
      title: "Select color",
      input: "radio",
      inputOptions,
      inputValidator: (value) => {
          return value ? null : "You need to choose something!";
        }
    });
    if (color) {
      Swal.fire({ html: `You selected: ${color}` });
    }
  }
  return (
    <Button color="secondary" className="sweet-27" onClick={displayAlert}>
      {RadioInput}
    </Button>
  );
};

export default RadioInputBtn;
