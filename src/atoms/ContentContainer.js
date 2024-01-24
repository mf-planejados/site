import { Colors } from '../organisms';
import { Box } from './Box';

/*

Default props:

- FlexDirection: column;
- Alignment: 'flex-start

*/

export const ContentContainer = (props) => {

   const {
      children,
      row = false,
      center = false,
      right = false,
      fullWidth = false,
      gap = 2,
      width = null,
      style = {},
      border = false,
      onClick = () => { }
   } = props;

   return (
      <Box sx={{
         ...styles.contentContainer,
         gap,
         ...(border && { border: `1px solid ${Colors.darkRed}` }),
         ...(width && { width }),
         ...(fullWidth && { flex: 1 }),
         ...(row ?
            {
               flexDirection: 'row',
               ...(center && { justifyContent: 'center' }),
               ...(right && { justifyContent: 'flex-end' }),
            }
            :
            {
               ...(center && { alignItems: 'center' }),
               ...(right && { alignItems: 'flex-end' }),
            }),
         ...style

      }} onClick={onClick}>
         {children}
      </Box>
   )
}

const styles = {
   contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: { xs: `10px`, xm: `10px`, md: `30px`, lg: `30px` },
      overflow: 'hidden',
      borderRadius: `4px`,
      backgroundColor: '#fff',
      boxShadow: `rgba(149, 157, 165, 0.17) 0px 6px 24px`,

   }
}