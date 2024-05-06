import React from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar'
import Footer from '../Components/Footer/Footer'
import PieActiveArc from './Dashboard/PieClickNoSnap'
import StackBars from './Dashboard/StackBars'
import SelectVariants from './Dashboard/SelectVariants'
import OutlinedCard from './Dashboard/OutlinedCard'
function AdminPage() {
  
  return (
    <div className='container'>
        <ElevateAppBar/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <SideBar/>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '2%'}}>
                <p style={{
                    fontSize: '44px',
                    fontFamily: 'Josefin Sans',
                    fontWeight: '400',
                    color: '#292F33',
                    marginLeft: '3%',
                }}>Overview</p>
                <SelectVariants/>
                <div style={{display : 'flex' , flexDirection:'row',gap:'5%' ,marginLeft : '5%',marginTop : '1.5%'}}>
                <OutlinedCard/>
                <OutlinedCard/>
                <OutlinedCard/>
                <OutlinedCard/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '2%', position: 'relative'}}>
                    <div style={{
                        minWidth: '35%',
                        backgroundColor: '#D5E0E6',
                        marginLeft: '3%',
                        alignContent: 'center',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                        padding: '20px'
                    }}>
                        <p style={{
                            fontSize: '24px',
                            fontFamily: 'Josefin Sans',
                            fontWeight: 'bold',
                            color: '#000000',
                            marginBottom: '10px'
                            
                        }}>Pie Chart</p>
                        <PieActiveArc/>
                    </div>
                    <div style={{
                        minWidth: '65%',
                        backgroundColor: '#D5E0E6',
                        marginLeft: '1%',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                        padding: '20px'
                    }}>
                        <p style={{
                            fontSize: '24px',
                            fontFamily: 'Josefin Sans',
                            fontWeight: 'bold',
                            color: '#000000',
                            marginBottom: '10px'
                        }}>Stack Bars</p>
                        <StackBars/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AdminPage
