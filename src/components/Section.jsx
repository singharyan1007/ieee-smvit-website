import {motion} from 'framer-motion'
const Section=({children,delay=0})=>(
    <motion.div
   
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    style={{ marginBottom: '1.5rem',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center' }}
  >
    {children}
  </motion.div>
)
export default Section
