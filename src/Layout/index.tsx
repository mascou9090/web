import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Context from '../components/Context'
import { GlobalStyle } from '../Styled/GlobalStyle';

import { LayoutS } from './style';


export const Layout = () => {
  return (
    <LayoutS>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Context />
      <Footer />
    </LayoutS>
  )
}

export default Layout