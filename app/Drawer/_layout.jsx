// import React from "react";
// import {Drawer} from 'expo-router/drawer'
// import { DrawerContentScrollView , DrawerItem} from '@react-navigation/drawer'
// import {Feather} from '@expo/vector-icons';
// import { Stack, router } from "expo-router";
// import {logout} from "../../firebase/auth"

// const CutomDrawerContent = (props) => {
//     return(
  


//     <DrawerContentScrollView {...props} >
          
//        <DrawerItem  
//        icon={({color , size}) => (
//        <Feather name="user" size={24} color={'black'} />
//        )}
//        label={"Profile"}
//        onPress={() => {
//         router.push('/Profile');
//        }}
//        />
//        <DrawerItem  
//        icon={({color , size}) => (
//        <Feather name="home" size={24} color={'black'} />
//        )}
//        label={"HOME"}
//        onPress={() => {
//         router.push('/Drawer/home');
//        }}
//        />
//          <DrawerItem  
//        icon={({color , size}) => (
//        <Feather name="package" size={24} color={'black'} />
//        )}
//        label={"Countries"}
//        onPress={() => {
//         router.push('');
//        }}
//        />
//        <DrawerItem  
//        icon={({color , size}) => (
//        <Feather name="log-in" size={24} color={'black'} />
//        )}
//        label={"Log In"}
//        onPress={() => {
//         router.replace('/account/login');
//        }}
//        />
//         <DrawerItem  
//        icon={({color , size}) => (
//        <Feather name="log-out" size={24} color={'black'} />
//        )}
//        label={"Log Out"}
   
//         onPress={async () => {
//             await logout();
//             router.push('/account/login');
//           }}
       
//        />

    
//     </DrawerContentScrollView>
//     );
// };

// export default function Layout(){

//     return(
//         <Drawer drawerContent={(props) => <CutomDrawerContent {...props} />} />
//     )
// }