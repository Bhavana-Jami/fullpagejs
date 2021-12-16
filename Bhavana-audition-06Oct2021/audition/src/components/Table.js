import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faEllipsisH,faShare,faDownload,faTrashAlt,faSearch,faChevronRight,faChevronLeft} from '@fortawesome/fontawesome-free-solid'

export default class table extends Component {
    
    render() {
        return (
            <div className="table_container">
                <div id="searchbar" >
                       <div className="inside_searchbar" ><FontAwesomeIcon icon={faSearch}/></div>
                       <div>1 of 276 contacts</div>
                       <div className="inside_searchbar">View</div>
                       <div className="inside_searchbar">Status</div>
                       <div className="inside_searchbar">Send</div>
                       <div className="inside_searchbar"><FontAwesomeIcon icon={faChevronLeft}/></div>
                       <div className="inside_searchbar"><FontAwesomeIcon icon={faChevronRight}/></div>
                </div>
              
               <table>
                   <thead>
                        <tr className="row">
                        <th className="name"><input type="checkbox"></input>Name<FontAwesomeIcon icon={faEllipsisH} className="checkbox"/></th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Source</th>
                        <th>Date added</th>
                        </tr>
                   </thead>
                   <tbody>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>
                    Cooper<a className="three_dots"><FontAwesomeIcon icon={faEllipsisH}/></a>
                    </td>
                        <td>alma.lawson@example.com</td>
                        <td>(319)555-0115</td>
                        <td>Open</td>
                        <td>Manually added</td>
                        <td className="date">11/7/16
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className="name"><input type="checkbox" className="checkbox"></input>Jane Cooper<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>alma.lawson@example.com</td>
                        <td>(319)555-0115</td>
                        <td>Open</td>
                        <td>Manually added</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>Wadw Warren<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>tim.jennings@example.com</td>
                        <td>(229)555-0115</td>
                        <td>Open</td>
                        <td>Manually added</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>Esther Howard<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>debra.holta@example.com</td>
                        <td>(319)555-0115</td>
                        <td>Open</td>
                        <td>Manually added</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>Cameroo<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>kenzi.lawson@example.com</td>
                        <td>(319)555-0115</td>
                        <td>In Progress</td>
                        <td>Web Form</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>Brooklyn Simmons<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>willie.jennings@example.com</td>
                        <td>(319)555-0115</td>
                        <td>Open</td>
                        <td>Intercom</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>Leslie Alexander<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>georigia.young@example.com</td>
                        <td>(319)555-0115</td>
                        <td>Open</td>
                        <td>Bulk Upoload</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>Jenny Wilson<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>denna.curtis@example.com</td>
                        <td>(319)555-0115</td>
                        <td>Open</td>
                        <td>Manually added</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>Robert Fox<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>alma.lawson@example.com</td>
                        <td>(319)555-0115</td>
                        <td>Open</td>
                        <td>Manually added</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    <tr>
                    <td className="name"><input type="checkbox" className="checkbox"></input>Jacob Jones<FontAwesomeIcon icon={faEllipsisH}/></td>
                        <td>alma.lawson@example.com</td>
                        <td>(319)555-0115</td>
                        <td>Open</td>
                        <td>Manually added</td>
                        <td className="date">11/7/16<span className="show_icons_on_hover"><FontAwesomeIcon icon={faShare}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faDownload}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faTrashAlt}/></span>
                        <span className="show_icons_on_hover"><FontAwesomeIcon icon={faEllipsisH}/></span></td>
                    </tr>
                    </tbody>
                </table>
               
                <div class="pagination">
                    <a href="#" id="start_pagination">&laquo;</a>
                    <a href="#">1&nbsp;</a>
                    <p>of 28</p>
                    <a href="#">&raquo;</a>
                </div>
               
            </div>
        )
    }
}
