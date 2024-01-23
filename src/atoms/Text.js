import { Typography } from "@mui/material";
import { Colors } from "../organisms";

export const Text = (props) => {

   const {
      children,
      light = false,
      bold = false,
      small = false,
      large = false,
      title = false,
      veryLarge = false,
      style = {}
   } = props;

   return (
      <Typography
         {...props}
         sx={{
            fontFamily: 'InterRegular',
            fontSize: {xs:`12px`, xm: `15px`, md: `15px`,lg: `15px`},
            color: Colors.darkBlueText,
            ...(light && { fontFamily: 'InterLight' }),
            ...(bold && { fontFamily: 'InterSemiBold' }),
            ...(small && { fontSize: {xs:`10px`, xm: `13px`, md: `13px`,lg: `13px`} }),
            ...(large && { fontSize: {xs:`15px`, xm: `18px`, md: `18px`,lg: `18px`} }),
            ...(title && { fontSize: {xs:`18px`, xm: `22px`, md: `22px`,lg: `22px`} }),
            ...(veryLarge && { fontSize: {xs:`20px`, xm: `25px`, md: `30px`,lg: `35px`} }),
            ...style
         }}
      >
         {children}
      </Typography>
   )
}