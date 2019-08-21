import React from 'react';

import macbook from '../Images/macbook.png';
import macbookair from '../Images/macbookair.png';
import iMac from '../Images/iMac.png';
import iMacpro from '../Images/imacpro.png';
import macmini from '../Images/macmini.png';
import accessories from '../Images/accessories.png';
import highsierra from '../Images/highsierra.png';
import compare from '../Images/compare.png';

function MacNavBar() {
    return (
        <div className='mac-bar-wrapper'>
    <ul className='mac-bar'>
        <img className='mac-menu' src={macbook}/>
        <img className='mac-menu' src={macbookair}/>
        <img className='mac-menu' src={iMac}/>
        <img className='mac-menu' src={iMacpro}/>
        <img className='mac-menu' src={macmini}/>
        <img className='mac-menu' src={accessories}/>
        <img className='mac-menu' src={highsierra}/>
        <img className='mac-menu' src={compare}/>
    </ul>
    </div>
    )
}

export default MacNavBar;