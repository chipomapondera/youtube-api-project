import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'

class App extends React.Component {
    state = {videos: [], selectedVideo: null}

    componentDidMount() {
        this.onTermSubmit('buildings')
    }

    onTermSubmit = async searchTerm => {
        const response = await youtube.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: searchTerm
            }
        })
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
        <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <div className="ui  grid">
                <div className="ui  row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos} 
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App
