
import { Box, Text } from "../../atoms"
import { Colors, } from "../../organisms"

export default function Home(props) {
   return (
      <Box sx={styles.container}>
         <Text>Hello MF</Text>
      </Box>
   )
}

const styles = {
   container: {
    marginTop: 20
   },
}