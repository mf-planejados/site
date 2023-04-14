import { useState } from "react";
import { Box, Text } from "../../atoms";

export const DropList = (props) => {

   const {
      data = [],
      fieldToDisplay,
      selectedOption,
      onSelect = () => { },
      placeholder = 'placeholder',
      vertical = false,
      filterOpitions = false,
   } = props;

   const [open, setOpen] = useState(false)

   return (
      <>
         <Box sx={{
            display: 'flex',
            alignItems: 'center',
            ...(vertical && {
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'flex-start'
            }),
            flex: 1,
            gap: 2,
         }}>
            <Box sx={{
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               gap: 0.7,
            }}>
               <Box
                  sx={{
                     display: 'flex',
                     padding: 2,
                     border: `1px solid #ccc`,
                     position: 'relative',
                     borderRadius: 2,
                     "&:hover": {
                        cursor: 'pointer'
                     }
                  }}
                  onClick={() => setOpen(!open)}
               >
                  <Box sx={{
                     display: 'flex',
                     flex: 1,
                  }}>
                     <Text style={{ ...(!selectedOption?.[fieldToDisplay] && { color: '#bbb' }) }}>{selectedOption?.[fieldToDisplay] || placeholder}</Text>
                  </Box>
                  {selectedOption && filterOpitions ?
                     <Box sx={{ ...styles.filterContainer }} onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        onSelect('')
                        setOpen(false)
                     }} />
                     : ''}
                  <Box sx={{ ...styles.arrowContainer, ...(!open && { transform: 'rotate(180deg)' }) }} />
               </Box>
               {open ?
                  <Box
                     onClick={(e) => e.stopPropagation()}
                     sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: `1px solid #ccc`,
                        borderRadius: 2,
                        overflow: 'hidden',
                        // gap: 0.2,
                     }}
                  >
                     {data.map((item, index) =>
                        <Box
                           key={`${item.id}_droplist-${index}`}
                           sx={styles.dropListOptionItem}
                           onClick={() => {
                              setOpen(false)
                              onSelect(item)
                           }}>
                           <Text>{item[fieldToDisplay]}</Text>
                        </Box>
                     )}
                  </Box>
                  :
                  <></>
               }
            </Box>
         </Box>
      </>
   )
}

const styles = {
   arrowContainer: {
      backgroundImage: `url('/icons/gray_arrow_up.png')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: 20,
      height: 20,
   },
   filterContainer: {
      backgroundImage: `url('/icons/clean_filter_icon.png')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: 15,
      height: 15,
      margin: '3px 10px 0px 5px'
   },
   dropListOptionItem: {
      padding: `10px 15px`,
      "&:hover": {
         backgroundColor: '#f0f0f0',
         cursor: 'pointer'
      }
   }
}