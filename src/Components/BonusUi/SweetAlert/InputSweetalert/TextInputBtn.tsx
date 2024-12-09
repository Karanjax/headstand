import Swal from "sweetalert2";
import { TextInput } from "@/Constant";
import { Button } from "reactstrap";
import React from "react";

const TextInputBtn: React.FC = () => {
  const displayAlert = async () => {
    const { value: ipAddress } = await Swal.fire<string>({
      title: "Enter your IP address",
      input: "text",

      inputLabel: "Your IP address",
      showCancelButton: true,
      inputValidator: (value) => {
          return value ? null : "You need to write something!";
      },
    });

    if (ipAddress) {
      Swal.fire(`Your IP address is ${ipAddress}`);
    }
  };

  return (
    <Button color="success" className="sweet-22" onClick={displayAlert}>
      {TextInput}
    </Button>
  );
};

export default TextInputBtn;
