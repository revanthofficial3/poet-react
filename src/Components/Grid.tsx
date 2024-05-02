import React, { Component } from 'react'
import './Grid.css'
import poet from '../assets/Poet.jpg'

interface Props {

}
interface State {

}
class Grid extends Component<Props, State> {
    render() {
        return <div className='body'>
            <div className='tag1'>
                <ul className='nav-tag'>
                    <li><a href="#" className='nav-tag-li'>Home</a></li>
                    <li><a href="#" className='nav-tag-li'>About</a></li>
                    <li><a href="#" className='nav-tag-li'>Achievement</a></li>
                </ul>

                <div className='head-name'>

                    <h1 className='head-h1'>Kazi Nazrul Islam</h1><br />
                    <h3 className='head-h3'>The National Poet of Bangladesh</h3>

                </div>
            </div>

            <div className='tag2'>
                <div className='tag2-cmn'>
                    <div className='tag2-para-cmn'>
                        <div className='tag2-para1'>
                            <h2 className='tag2-h1'>Rabel Poet</h2>
                            <p className='tag2-para'>
                                Kazi Nazrul Islam is the national poet of Bangladesh who is
                                especially recognized as a Bidrohi Kobi (rebel poet) around the
                                country. Nazrul is a famous poet, musician and philosopher of
                                Bangladesh. The famous poet Nazrul's writings deal with the
                                revolution of that period of the British government. His
                                revolutionary attempt helped him to be a national poet of
                                Bangladesh. He has raised his voice against any kinds of fascism and
                                oppression and got popularity swiftly around the Indian
                                Subcontinent.
                            </p>
                        </div>
                        <div className='tag2-para1 tag2-para2'>
                            <h2 className='tag2-h1'>Awsome Writer</h2>
                            <p className='tag2-para'>
                                Nazrul's writings explored themes such as love, freedom, humanity,
                                and revolution. He opposed all forms of bigotry and
                                fundamentalism, including religious, caste-based and gender-based.
                                Throughout his career, Nazrul wrote short stories, novels, and
                                essays but is best known for his songs and poems. He pioneered new
                                music forms such as Bengali ghazals. Nazrul wrote and composed
                                music for nearly 4,000 songs (many recorded on HMV and
                                gramophone records), collectively known as Nazrul Geeti.
                            </p>
                        </div>

                    </div>
                    <div className='img'>
                        <img src={poet} className='poet-img'></img>
                    </div>
                
                <span>
                    <button className=''>Learn More</button>
                    <button>Videos</button>
                    <button>Books</button>
                </span>
                </div> <h3 className='tag2-para3'>"Love has no meaning or amount." - Kazi Nazrul Islam</h3>
            </div>
           
           <div>
        
           </div>
        </div>
    }
}

export default Grid;