import React from 'react';

class News extends React.Component {
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
                <div className="row_breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="#">
                        <i className="fa fa-hand-o-right">&nbsp;</i>
                        Trang Chủ 
                      </a>
                    </li>
                    <li className="active">Tin Tức</li>
                  </ol>
                </div>
                <div className="news_entry">
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <div className="news_acticle">
                        <h3><a href="#">Mỹ Khê - một trong 10 bãi biển đẹp nhất hành tinh</a></h3>
                        <div className="news_images">
                          <a href="#">
                            <img src="src/assets/images/thumbs/img_news_1s.jpg" alt="" width="360" height="221" />
                          </a>
                        </div>
                        <p>ngày 6 tháng 10, 2015 </p>
                        <p>Khu vực Đông Nam Á</p>
                        <p>Thái Lan , Singapore, Lào, Campuchia, Indonexia, Malaysia, được miễn thị thực trong 30 ngày miễn thị thực trong 30 ngày đối với hộ chiếu phổ thông (HCPT).</p>
                        <a className="view_detail" href="#">
                          <i className="fa fa-hand-o-right">&nbsp;</i> CHI TIẾT
                        </a>
                      </div>
                      <div className="news_acticle mt7">
                        <h3><a href="#">44 nước người Việt Nam được tự do du lịch không cần visa</a></h3>
                        <div className="news_images">
                          <a href="#">
                            <img src="src/assets/images/thumbs/img_news_2s.jpg" alt="" width="360" height="221" />
                          </a>
                        </div>
                        <p>ngày 6 tháng 10, 2015 </p>
                        <p>Khu vực Đông Nam Á</p>
                        <p>Thái Lan , Singapore, Lào, Campuchia, Indonexia, Malaysia, được miễn thị thực trong 30 ngày miễn thị thực trong 30 ngày đối với hộ chiếu phổ thông (HCPT).</p>
                        <a className="view_detail" href="#">
                          <i className="fa fa-hand-o-right">&nbsp;</i> CHI TIẾT
                        </a>
                      </div>
                      <div className="news_acticle mt7">
                        <h3><a href="#">44 nước người Việt Nam được tự do du lịch không cần visa</a></h3>
                        <div className="news_images">
                          <a href="#">
                            <img src="src/assets/images/thumbs/img_news_3s.jpg" alt="" width="360" height="221" />
                          </a>
                        </div>
                        <p>ngày 6 tháng 10, 2015 </p>
                        <p>Khu vực Đông Nam Á</p>
                        <p>Thái Lan , Singapore, Lào, Campuchia, Indonexia, Malaysia, được miễn thị thực trong 30 ngày miễn thị thực trong 30 ngày đối với hộ chiếu phổ thông (HCPT).</p>
                        <a className="view_detail" href="#">
                          <i className="fa fa-hand-o-right">&nbsp;</i> CHI TIẾT
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
                                <a href="#">Đà Nẵng tổ chức bắn pháo hoa mừng năm 2015</a>
                              </h4>
                              <p>UBND TP.Đà Nẵng ban hành kế hoạch tổ chức bắn pháo hoa hai bên </p>
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
                                <a href="#">Khu phức hợp Nesthome tại Đà Nẵng</a>
                              </h4>
                              <p>Vị trí, gần khu Phúc Lộc Viên nằm trên đường Chu Huy Mân, đi vào</p>
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
                                <a href="#">Buổi sớm trên biển An Bàng</a>
                              </h4>
                              <p> Chỉ đến khi có mặt trong danh sách 50 bãi biển đẹp nhất thế giới của trang CNNGo, An Bàng mới được</p>
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
                                <a href="#">Độc đáo 3 ngôi chùa ‘Linh Ứng tự’ ở Đà Nẵng</a>
                              </h4>
                              <p>Độc đáo 3 ngôi chùa ‘Linh Ứng tự’ ở Đà Nẵng Nằm trên những địa thế </p>
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
                                <img className="media-object" src="src/assets/images/thumbs/img_exprience_1.jpg" alt="" width="149" height="91" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                <a href="#">Đà Nẵng tổ chức bắn pháo hoa mừng năm 2015</a>
                              </h4>
                              <p>BND TP.Đà Nẵng ban hành kế hoạch tổ chức bắn pháo hoa hai bên </p>
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
                                <a href="#">Khu phức hợp Nesthome tại Đà Nẵng</a>
                              </h4>
                              <p> Vị trí, gần khu Phúc Lộc Viên nằm trên đường Chu Huy Mân, đi vào </p>
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
                                <a href="#">Buổi sớm trên biển An Bàng</a>
                              </h4>
                              <p>Chỉ đến khi có mặt trong danh sách 50 bãi biển đẹp nhất thế giới của trang CNNGo, An Bàng mới được</p>
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
                                <a href="#">Độc đáo 3 ngôi chùa ‘Linh Ứng tự’ ở Đà Nẵng</a>
                              </h4>
                              <p>Độc đáo 3 ngôi chùa ‘Linh Ứng tự’ ở Đà Nẵng Nằm trên những địa thế </p>
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
                                <img className="media-object" src="src/assets/images/thumbs/img_exprience_1.jpg" alt="" width="149" height="91" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                <a href="#">Đà Nẵng tổ chức bắn pháo hoa mừng năm 2015</a>
                              </h4>
                              <p>BND TP.Đà Nẵng ban hành kế hoạch tổ chức bắn pháo hoa hai bên </p>
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
                                <a href="#">Khu phức hợp Nesthome tại Đà Nẵng</a>
                              </h4>
                              <p> Vị trí, gần khu Phúc Lộc Viên nằm trên đường Chu Huy Mân, đi vào </p>
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
                                <a href="#">Buổi sớm trên biển An Bàng</a>
                              </h4>
                              <p>Chỉ đến khi có mặt trong danh sách 50 bãi biển đẹp nhất thế giới của trang CNNGo, An Bàng mới được</p>
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
                                <a href="#">Độc đáo 3 ngôi chùa ‘Linh Ứng tự’ ở Đà Nẵng</a>
                              </h4>
                              <p>Độc đáo 3 ngôi chùa ‘Linh Ứng tự’ ở Đà Nẵng Nằm trên những địa thế </p>
                              <a className="view_detail" href="#">
                                <i className="fa fa-hand-o-right">&nbsp;</i> CHI TIẾT
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="row_pagination tal"> 
                        <nav className="inner_nav"> 
                          <ul className="pagination"> 
                            <li className="disabled">
                              <a href="#" aria-label="Previous">
                                <span aria-hidden="true">
                                  <i className="icons_prevpage">&nbsp;</i>
                                </span>
                              </a>
                            </li> 
                            <li className="active">
                              <a href="#">
                                1 <span className="sr-only">(current)</span>
                              </a>
                            </li> 
                            <li><a href="#">2</a></li> 
                            <li><a href="#">3</a></li>
                            <li><a href="#">...</a></li> 
                            <li><a href="#">4</a></li> 
                            <li>
                            <a href="#" aria-label="Next">
                              <span aria-hidden="true">
                                <i className="icons_nextpage">&nbsp;</i>
                              </span>
                            </a>
                            </li> 
                          </ul> 
                        </nav> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_content col-md-4 col-sm-5 col-xs-12">
                <div className="blog_ads">
                  <img src="src/assets/images/thumbs/img_ads_1.jpg" alt="" width="355" height="272" />
                </div>
                <div className="blog_ads">
                  <img src="src/assets/images/thumbs/img_ads_2.jpg" alt="" width="356" height="320" />
                </div>
                <div className="blog_ads">
                  <img src="src/assets/images/thumbs/img_ads_3.jpg" alt="" width="356" height="225" />
                </div>
                <div className="blog_ads">
                  <img src="src/assets/images/thumbs/img_ads_5.jpg" alt="" width="356" height="102" />
                </div>
                <div className="blog_ads">
                  <img src="src/assets/images/thumbs/img_ads_2.jpg" alt="" width="356" height="320" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default News;