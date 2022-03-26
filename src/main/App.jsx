import React from 'react'
import {Layout,Card} from 'antd';
import AppHeader from '../common/header/appHeader';
import AppMenu from '../common/menu/appMenu';
import AppContent from '../common/content/appContent';

const App = () => {
    return(

        <Layout style={{ minHeight: '100vh'}}>
          <AppHeader/>
          <Layout>
            <AppMenu/>
            <Layout style={{ padding: '0 24px 24px' }}>
              <AppContent>
              <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Lançamentos Cliente"
    >
      Inner Card content
    </Card>
              </AppContent>
            </Layout>
          </Layout>
        </Layout>
        
    )
    }

    export default App