import { InputAdornment, TextField } from "@mui/material";
import { Colors } from "../organisms";
import { Box } from "./Box";

export const TextInput = (props) => {

   const { InputProps = {} } = props;

   return (
      <TextField
         {...props}
         
         InputProps={{
            sx: { borderRadius: 2, fontSize: { xs: '12px', xm: '15px', md: '15px', lg: '15px' }, fontFamily: 'InterRegular', color: Colors.darkBlueText, ...InputProps?.style },
            startAdornment: props.type === "search"
               ? (
                  <InputAdornment position="start">
                     <Box sx={{
                        ...styles.menuIcon,
                        filter: 'brightness(0) invert(.7)',
                        backgroundImage: `url('/icons/search_input_icon.png')`,
                        transition: '.3s',
                        "&:hover": {
                           opacity: 0.8,
                           cursor: 'pointer'
                        }
                     }} />
                  </InputAdornment>
               )
               : null,

         }}
         InputLabelProps={{ style: { color: '#888' } }}

      />
   )
}

const styles = {
   date: {
      // display: 'none',
      display: 'block',
      fontSize: { xs: '13px', xm: '13px', md: '13px', lg: '14px', xl: '15px' },
      fontFamily: 'MetropolisBold',
   },
   menuIcon: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: 20,
      height: 20,
   },
}