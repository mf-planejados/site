import { Box, Button, Text, TextInput } from "../../atoms"
import { Colors } from ".."
import Link from "next/link"

const getFieldValue = (user, field) => {
   const fieldParts = field.split('.')
   let value = user

   for (let i = 0; i < fieldParts.length; i++) {
      const key = fieldParts[i]
      value = value[key]

      if (!value) {
         break
      }
   }

   return value || ''
}


export const Table = (props) => {
   const { data = [], tableContent = {}, to = '/' } = props
   const { header = [], fields = [] } = tableContent

   return (
      <>
         <Box sx={styles.containerCard}>
            <Box style={styles.contentContainer}>
               {header.map((item, index) => (
                  <Box key={`${item}_${index}`} sx={{ width: `${100 / header.length}%`, marginBottom: `10px` }}>
                     <Text bold style={styles.title}>{item}</Text>
                  </Box>
               ))}
            </Box>
            {data.map((item, index) => (
               <Link href={`${to}/${item._id}`} key={`${item._id}-${index}`}>
                  <Box sx={{ ...styles.boxUsers, }}>
                     {fields.map((field, index) => {
                        let value = item?.[field];

                        if (typeof value === 'boolean') value = value ? `Sim` : `Não`
                        if (field.includes('.')) value = getFieldValue(item, field);

                        return (
                           <Box sx={{ width: `${100 / data.length}%`, display: 'flex', justifyContent: 'center',  }}>
                              <Text key={`${field}_${item._id}_${index}`} style={{withSpace:'no-wrap', overflow:'hidden', textOverflow: 'ellipsis', minWidth: 70,
                              padding: {xs:`0px 3px 0px 3px`, xm: `0px`, md: `0px`,lg: `0px`}}}>
                              {value || '-'}
                           </Text>
                           </Box>
                  )
                     })}
               </Box>
               </Link>
            ))}
      </Box>
      </>
   )
}

const styles = {
   containerCard: {
      flex: 1,
   },
   contentContainer: {
      display: "flex",
      textAlign: 'center',
      justifyContent: 'space-around',
      padding: 8,
   },
   boxUsers: {
      display: 'flex',
      justifyContent: 'space-around',
      // justifyContent: 'center',
      // backgroundColor: 'bisque',
      borderTop: `1px solid #eaeaea`,
      padding: 2,
      textAlign: 'center',
      "&:hover": {
         backgroundColor: '#f9f9f9'
      }
   },
}