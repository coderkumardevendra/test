import React, { Component, Fragment } from 'react'
import TopBar from "../components/TopBar";
import Bottombar from "../components/Bottombar";
import MiddleBar from "../components/MiddleBar";
import Slider from '../components/Slider';
import TwoNews from '../components/TwoNews';
import { Container, Row } from 'react-bootstrap';
import Latest from '../components/Latest';
import Politics from '../components/Politics';
import Pune from '../components/Pune';
import Editor from '../components/Editor';

export class HomePage extends Component {
    componentDidMount(){
        document.title = "Daily News - Latest news of pune and india"
    }
    render() {
        return (
            <Fragment>
                <TopBar/>
                <MiddleBar/>
                <Bottombar/>
                <section className="utf_featured_post_area pt-4">
                    <Container>
                        <Row>
                        <Slider/>
                        <TwoNews/>
                        </Row>
                    </Container>
                </section>
                <section className="utf_block_wrapper p-top-0 p-bottom-0">
                    <Container>
                        <Row>
                            <Latest/>
                            <Politics/>
                            <Pune/>
                        </Row>
                    </Container>
                </section>
                <section className="utf_latest_new_area pb-bottom-20">
                    <Container>
                    <div className="utf_latest_news block color-red">
                        <Editor/>
                    </div>
                    </Container>
                </section>
            </Fragment>
        )
    }
}

export default HomePage
