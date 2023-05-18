import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffffff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root": {
    color: "#ffffff",
  },

  "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#94A1B2",
  },

  "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
    color: "#94A1B2",
  },

  "& .MuiInput-underline:before": {
    borderBottomColor: "#ffffff",
  },

  "& input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 100px #2B2B32 inset",
    "-webkit-text-fill-color": "#ffffff",
  },
});
