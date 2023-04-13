import suggestions from '../../pages/suggestionJson/suggestion.json'
const MainContent = () => {
    return (
        <div className="MainContent">
            <div className="maincontent_suggestions">
                {suggestions.map(e => {
                    return (
                        <p>{e}</p>
                    )
                })}
            </div>
            <div className="mid_main_content">

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 23, 34, 345, 123, 546546, 234234].map(e => {
                    return (
                        <div key={e} className="allVideos">
                            <div className="video_image">
                                <img src="/assests/posts.jpg" alt="" />
                            </div>
                            <div className="channel_img_desc">
                                <img src="/assests/channelimage.jpg" alt="" />
                                <div className="all_data_video">
                                    <p style={{ fontWeight: "700", fontSize: "17px" }}>Isreal Crisis 2023 | Largest Protests in History | Explained by Dhruv Rathee.</p>
                                    <p style={{ fontWeight: "300", fontSize: "15px" }}>Dhruv Rathee </p>
                                    <p style={{ fontWeight: "300", fontSize: "15px" }}>2.4M views . 1 day ago</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default MainContent;