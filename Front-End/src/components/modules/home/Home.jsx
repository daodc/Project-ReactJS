import React from 'react';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="main-content">
        <div className="container">
          <section>
            <div className="row">
              <div className="main_content col-md-8 col-sm-7 col-xs-12">
                <div className="main_news">
                  <a href="#"><img src="src/assets/images/thumbs/slider-1.jpg" alt="" width="754" height="368" /></a>
                  <div className="intro-box">
                    <h2><a href="#" className="title-intro">Giới Thiệu Du Lịch Đà Nẵng</a></h2>
                    <p className="introducation">Đà Nẵng một thành phố thu hút khách du lịch không chỉ bởi vẻ đẹp thiên nhiên đa dạng với nhiều bãi biển đẹp, mà nó còn đẹp về cả con người, với những nụ cười thân thiện luôn nở trên môi Đà Nẵng một thành phố thu hút khách du lịch không chỉ bởi vẻ đẹp thiên nhiên đa dạng với nhiều bãi biển đẹp, mà nó còn đẹp về cả con người, với những nụ cười thân thiện luôn nở trên môi... </p>
                  </div>
                </div>
                <div className="title_general">
                  <a className="name_title" href="#">Tin tức</a>
                  <a className="view_all" href="#">Xem tất cả</a>
                </div>
                <div className="news_entry">
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <div className="news_acticle">
                        <h3><a href="#">Kinh nghiệm phượt Đà nẵng bằng xe máy tiết kiệm 2015</a></h3>
                        <div className="news_images">
                          <a href="#">
                            <img src="src/assets/images/thumbs/img_exprience_large.jpg" alt="" width="362" height="221" />
                          </a>
                        </div>
                        <p>ngày 6 tháng 10, 2015 </p>
                        <p>Kinh nghiệm Phượt đèo Hải Vân, thăm vịnh Lăng Cô, đầm Lập An xứ Huế….bằng xe máy Đèo Hải Vân hay còn gọi là đèo mây, cao 500m, dài hơn 20km cắt ngang dãy núi Bạch Mã ở giữa ranh  Bạch Mã ở giữa ranh...</p>
                        <a className="view_detail" href="#">
                          <i className="fa fa-hand-o-right">&nbsp;</i>
                          CHI TIẾT
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <ul className="list-unstyled list_news list_news_vertical">
                        <li className="item_news">
                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object" src="src/assets/images/thumbs/img_exprience_1.jpg" alt="" width="149" height="91" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                <a href="#">Tour đi Cù Lao Chàm – Hội An</a>
                              </h4>
                              <p>Kinh nghiệm Du lịch Hội An   Hội An là một đô thị cổ của Việt Nam, là trung tâm giao thương ...</p>
                              <a className="view_detail" href="#">
                                <i className="fa fa-hand-o-right">&nbsp;</i> CHI TIẾT
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="item_news">
                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object" src="src/assets/images/thumbs/img_exprience_2.jpg" alt="" width="149" height="91" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                <a href="#">Đi lại ăn uống ngủ nghỉ vui chơi khi bạn đến đà nẵng</a>
                              </h4>
                              <p>tôi đã hứa viết một bài về kinh nghiệm du lịch Đà Nẵng lâu lắm rồi.</p>
                              <a className="view_detail" href="#">
                                <i className="fa fa-hand-o-right">&nbsp;</i> CHI TIẾT
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="item_news">
                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object" src="src/assets/images/thumbs/img_exprience_3.jpg" alt="" width="149" height="91" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                <a href="#">Nên đi du lịch hè ở Đà Nẵng hay Nha Trang?</a>
                              </h4>
                              <p>Đà Nẵng và Nha Trang là hai thành phố du lịch nổi tiếng về bãi biển đẹp</p>
                              <a className="view_detail" href="#">
                                <i className="fa fa-hand-o-right">&nbsp;</i> CHI TIẾT
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="item_news">
                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object" src="src/assets/images/thumbs/img_exprience_4.jpg" alt="" width="149" height="91" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                <a href="#">Kinh nghiệm du lịch bụi đà nẵng 2015</a>
                              </h4>
                              <p>Kinh nghiệm khi du lịch bụi Đà Nẵng Chào các bạn, hôm nay mình </p>
                              <a className="view_detail" href="#">
                                <i className="fa fa-hand-o-right">&nbsp;</i> CHI TIẾT
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_content col-md-4 col-sm-5 col-xs-12">
                <div className="blog_ads">
                  <a href="#"><img src="src/assets/images/thumbs/img_ads_1.jpg" alt="" width="355" height="272" /></a>
                </div>
                <div className="blog_ads">
                  <a href="#"><img src="src/assets/images/thumbs/img_ads_2.jpg" alt="" width="356" height="320" /></a>
                </div>
                <div className="blog_ads">
                  <a href="#"><img src="src/assets/images/thumbs/img_ads_3.jpg" alt="" width="356" height="225" /></a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="title_general">
              <a className="name_title" href="#">Dịch vụ lưu trú</a>
              <a className="view_all" href="#">Xem tất cả</a>
            </div>
            <div className="row list_focal">
              <div className="item_focal col-sm-4 col-xs-12">
                <div className="thumbnail">
                  <div className="process-img">
                    <span className="pricing"> Giá từ: <strong>300.000</strong></span>
                    <span className="score small"> 7.0<i className="icons-arleft">&nbsp;</i> </span>
                    <div className="inly-flow">
                      <a href="#">
                        <img src="src/assets/images/thumbs/hotel_1.jpg" alt="" width="360" height="309" />
                      </a>
                    </div>
                  </div>
                  <div className="caption">
                    <h3>
                      <a href="#">Khách sạn Gia Mỹ An</a>
                    </h3>
                    <p>835 Nguyễn Tất Thành, phường Xuân Hà, quận Thanh Khê</p>
                    <div className="gd-rating">
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                    </div>
                    <div className="link-action">
                      <span><i className="fa fa-heart-o">&nbsp;</i> 1 </span>
                    </div>
                    <a className="view_detail" href="#">
                      <i className="fa fa-hand-o-right">&nbsp;</i>
                      CHI TIẾT
                    </a>
                  </div>
                </div>
              </div>
              <div className="item_focal col-sm-4 col-xs-12">
                <div className="thumbnail">
                  <div className="process-img">
                    <span className="pricing"> Giá từ: <strong>300.000</strong></span>
                    <span className="score small"> 7.0<i className="icons-arleft">&nbsp;</i> </span>
                    <div className="inly-flow">
                      <a href="#">
                        <img src="src/assets/images/thumbs/hotel_2.jpg" alt="" width="360" height="309" />
                      </a>
                    </div>
                  </div>
                  <div className="caption">
                    <h3>
                      <a href="#">Khách sạn À La Carte Đà Nẵng Beach</a>
                    </h3>
                    <p>200 Võ Nguyên Giáp, Phường Phước Mỹ, Quận Sơn Trà</p>
                    <div className="gd-rating">
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                    </div>
                    <div className="link-action">
                      <span><i className="fa fa-heart-o">&nbsp;</i> 1 </span>
                    </div>
                    <a className="view_detail" href="#">
                      <i className="fa fa-hand-o-right">&nbsp;</i>
                      CHI TIẾT
                    </a>
                  </div>
                </div>
              </div>
              <div className="item_focal col-sm-4 col-xs-12">
                <div className="thumbnail">
                  <div className="process-img">
                    <span className="pricing"> Giá từ: <strong>300.000</strong></span>
                    <span className="score small"> 7.0<i className="icons-arleft">&nbsp;</i> </span>
                    <div className="inly-flow">
                      <a href="#">
                        <img src="src/assets/images/thumbs/hotel_3.jpg" alt="" width="360" height="309" />
                      </a>
                    </div>
                  </div>
                  <div className="caption">
                    <h3>
                      <a href="#">Tuyết Vân Hotel II</a>
                    </h3>
                    <p>Lô 15 AG Nam Trân, phường Hòa Minh, quận Liên Chiểu</p>
                    <div className="gd-rating">
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                      <i className="fa fa-star">&nbsp;</i>
                    </div>
                    <div className="link-action">
                      <span><i className="fa fa-heart-o">&nbsp;</i> 1 </span>
                    </div>
                    <a className="view_detail" href="#">
                      <i className="fa fa-hand-o-right">&nbsp;</i>
                      CHI TIẾT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="main_content col-md-8 col-sm-7 col-xs-12">
                <div className="blog_ads">
                  <a href="#">
                    <img src="src/assets/images/thumbs/img_ads_4.jpg" alt="" width="775" height="110" />
                  </a>
                </div>
                <div className="news_entry">
                  <div className="title_general mt8">
                    <a className="name_title" href="#">ĐỊA ĐIỂM DU LỊCH</a>
                    <a className="view_all" href="#">Xem tất cả</a>
                  </div>
                  <ul className="row list-unstyled list_news list_equalheight">
                    <li className="item_news col-md-6 col-xs-12">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" src="src/assets/images/thumbs/img_location_1.jpg" alt="" width="149" height="91" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">Du lịch Biển Đà Nẵng</a>
                          </h4>
                          <p>Đà Nẵng rất nổi tiếng với những bãi biển nối liền nhau, cát mịn nước trong xanh, và bãi biển được giữ gìn </p>
                          <a className="view_detail" href="#">
                            <i className="fa fa-hand-o-right">&nbsp;</i>
                            CHI TIẾT
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item_news col-md-6 col-xs-12">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" src="src/assets/images/thumbs/img_exprience_1.jpg" alt="" width="149" height="91" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">Du lịch Đà Nẵng Huế</a>
                          </h4>
                          <p>Du lịch Đà Nẵng Huế – Tour ghép Đà Nẵng Huế khởi hành hằng ngày Lịch trình: Đà Nẵng – Huế</p>
                          <a className="view_detail" href="#">
                            <i className="fa fa-hand-o-right">&nbsp;</i>
                            CHI TIẾT
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item_news col-md-6 col-xs-12">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" src="src/assets/images/thumbs/img_location_3.jpg" alt="" width="149" height="91" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">Tour Đà Nẵng Hội An Huế Quảng Bình</a>
                          </h4>
                          <p>hời gian: 5 ngày – 4 đêm Phương tiện: ôtô du lịch Khởi hành</p>
                          <a className="view_detail" href="#">
                            <i className="fa fa-hand-o-right">&nbsp;</i>
                            CHI TIẾT
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item_news col-md-6 col-xs-12">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" src="src/assets/images/thumbs/img_exprience_2.jpg" alt="" width="149" height="91" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">Hồ Truồi – Thiền Viện Trúc Lâm Bạch Mã</a>
                          </h4>
                          <p>Hồ Truồi – Thiền Viện Trúc Lâm Bạch Mã Hồ Truồi có diện tích</p>
                          <a className="view_detail" href="#">
                            <i className="fa fa-hand-o-right">&nbsp;</i>
                            CHI TIẾT
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item_news col-md-6 col-xs-12">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" src="src/assets/images/thumbs/img_location_5.jpg" alt="" width="149" height="91" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">Khám phá vườn bướm nhiệt đới ở Lifestyle resort Đà Nẵng</a>
                          </h4>
                          <p>Đà Nẵng, miền đất với con người hiền hòa thân thiện, thiên nhiên hữu </p>
                          <a className="view_detail" href="#">
                            <i className="fa fa-hand-o-right">&nbsp;</i>
                            CHI TIẾT
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item_news col-md-6 col-xs-12">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" src="src/assets/images/thumbs/img_location_5.jpg" alt="" width="149" height="91" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">Du Lịch Miền Trung 4 ngày 3 đêm</a>
                          </h4>
                          <p>Du Lịch Miền Trung 4 ngày 3 đêm Hành trình: ĐÀ NẴNG – SƠN TRÀ – CÙ LAO CHÀM – HỘI AN – BÀ NÀ –</p>
                          <a className="view_detail" href="#">
                            <i className="fa fa-hand-o-right">&nbsp;</i>
                            CHI TIẾT
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item_news col-md-6 col-xs-12">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" src="src/assets/images/thumbs/img_location_5.jpg" alt="" width="149" height="91" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">Khám phá vườn bướm nhiệt đới ở Lifestyle resort Đà Nẵng</a>
                          </h4>
                          <p>Đà Nẵng, miền đất với con người hiền hòa thân thiện, thiên nhiên hữu </p>
                          <a className="view_detail" href="#">
                            <i className="fa fa-hand-o-right">&nbsp;</i>
                            CHI TIẾT
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item_news col-md-6 col-xs-12">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img className="media-object" src="src/assets/images/thumbs/img_location_5.jpg" alt="" width="149" height="91" />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">Du Lịch Miền Trung 4 ngày 3 đêm</a>
                          </h4>
                          <p>Du Lịch Miền Trung 4 ngày 3 đêm Hành trình: ĐÀ NẴNG – SƠN TRÀ – CÙ LAO CHÀM – HỘI AN – BÀ NÀ –</p>
                          <a className="view_detail" href="#">
                            <i className="fa fa-hand-o-right">&nbsp;</i>
                            CHI TIẾT
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right_content col-md-4 col-sm-5 col-xs-12">
                <div className="blog_ads">
                  <a href="#"><img src="/src/assets/images/thumbs/img_ads_2.jpg" alt="" width="357" height="110" /></a>
                </div>
                <div className="blog_ads">
                  <a href="#"><img src="/src/assets/images/thumbs/img_ads_6.jpg" alt="" width="326" height="155" /></a>
                </div>
                <div className="blog_ads">
                  <a href="#"><img src="/src/assets/images/thumbs/img_ads_7.jpg" alt="" width="326" height="181" /></a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;