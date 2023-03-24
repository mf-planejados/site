import { Text } from "../../atoms"
import { Colors, } from "../../organisms"

 function Portifolio() {
   return (
   <Text>Hello Portifolio</Text>
)
}

const styles = {
   container: {
      display: 'grid',
      gap: 2,
      justifyContent: 'start',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridTemplateRows: 'auto',
      overflow: 'hidden',
      position: 'relative'
   },
}

export default Portifolio();