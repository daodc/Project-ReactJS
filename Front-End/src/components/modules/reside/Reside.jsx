import React from 'react';

class Reside extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="main-content">
        <div className="container">
          <section>
            <div className="row">
              <div className="main_content col-xs-12">
                <div className="row_breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="#">
                        <i className="fa fa-hand-o-right">&nbsp;</i>
                        Trang Chủ 
                      </a>
                    </li>
                    <li className="active">Lưu trú</li>
                  </ol>
                </div>
                <div className="row mb20">
                  <div className="col-xs-12">
                    <div className="wd-stay">
                      <div className="input-group">
                        <div className="input-group-btn">
                          <button type="button" className="btn btn-stay dropdown-toggle" data-toggle="dropdown">
                            Lưu trú <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div>
                        <input type="text" name="" placeholder="Nhập tên khách sạn, khu vực" className="form-control" />
                        <div className="input-group-btn">
                          <button type="submit" className="btn-sbm-search">Tìm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row rowParent mt20 mb20">
                  <div className="col-xs-12 col-sm-7 col-md-9 col-lg-9">
                    <div className="wd-main-content">
                      <div className="wd-flexbox">
                        <div className="wd-title">
                          <h2 className="tlh2-3"><a href="#">Điểm lưu trú</a></h2>
                          <ul className="control-sort">
                            <li><a href="#" className="bt-vert"><i className="fa fa-th">&nbsp;</i></a></li>
                            <li><a href="#" className="bt-horizontal"><i className="fa fa-navicon">&nbsp;</i></a></li>
                            <li><a href="#"><i className="fa fa-fire">&nbsp;</i></a></li>
                          </ul>
                        </div>
                        <div className="row rowParent wd-pofolio mb20">
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <a href="#" className="new-product"><i className="iconmuch-new">&nbsp;</i></a>
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>700.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">8.5 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-1.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách sạn Mường Thanh Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <a href="#" className="new-product"><i className="iconmuch-new">&nbsp;</i></a>
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>810.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">9.5 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-2.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách sạn Holiday Beach Hotel & Spa Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>966.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">8.9 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-3.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách sạn Eden Plaza Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>440.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">6.8 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-4.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách sạn Iris Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>525.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">8.8 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-5.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách sạn Hoàng Sa Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>423.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">8.6 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-6.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách sạn Golden Sea Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>529.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">8.5 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-7.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách Sạn Danasea Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>705.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">8.5 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-8.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách sạn Sunset Bay Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                            <div className="wd-place">
                              <div className="wd-thumbnail">
                                <div className="process-img">
                                  <span className="pricing">
                                    Giá từ: 
                                    <strong>550.000 VND</strong>
                                    <i className="iconmuch-bdl">&nbsp;</i>
                                  </span>
                                  <span className="score small">8.5 <i className="iconmuch-arleft">&nbsp;</i></span>
                                  <div className="inly-flow">
                                    <a href="#"><img src="src/assets/images/thumbs/img-thumb-9.jpg" alt="" width="198" height="170" /></a>
                                    <div className="item-actions">
                                      <a href="#" className="link-dotting">Đánh dấu</a>
                                      <a href="#" className="link-love"><i className="fa fa-heart">&nbsp;</i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-overlay">&nbsp;</div>
                                <div className="caption">
                                  <h3><a href="#">Khách sạn Bamboo Green Đà Nẵng</a></h3>
                                  <div className="wd-rating">
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                    <i className="iconmuch-star">&nbsp;</i>
                                  </div>
                                  <p>123 Trần Cao Vân - Thanh Khê</p>
                                  <div className="link-action">
                                    <span><i className="fa fa-comment-o">&nbsp;</i> 125 bình luận&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="ml12"><i className="fa fa-heart-o">&nbsp;</i> 756 thích </span>
                                  </div>
                                  <a href="#" className="btn-booking">Đặt phòng</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <a href="#" className="view-continue">Xem tiếp</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-5 col-md-3 col-lg-3">
                    <div className="wd-right-content accordion">
                      <div className="wd-portlet">
                        <div className="wd-portlet-title">
                          <h2><a href="#">Xếp hạng</a></h2>
                        </div>
                        <div className="wd-portlet-body">
                          <div className="wd-review">
                            <div id="h-slider"></div>
                          </div>
                          <ul className="wd-list-pricing wd-radio">
                            <li>
                              <input name="hotel" id="" type="checkbox" />
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="hotel" id="" type="checkbox" />
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="hotel" id="" type="checkbox" />
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="hotel" id="" type="checkbox" />
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="hotel" id="" type="checkbox" />
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <span className="wd-rating"><i className="iconmuch-star">&nbsp;</i></span>
                              <div className="number">68</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="wd-portlet">
                        <div className="wd-portlet-title">
                          <h2><a href="#">Giá tiền</a></h2>
                        </div>
                        <div className="wd-portlet-body">
                          <ul className="wd-list-pricing wd-radio">
                            <li>
                              <input name="radio-oparator" type="checkbox" id="pricing-1" />
                              <label htmlFor="pricing-1">Tất cả</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="pricing-2" />
                              <label htmlFor="pricing-2">0 đến 300.000</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="pricing-3" />
                              <label htmlFor="pricing-3">300.000 đến 600.000</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="pricing-4" />
                              <label htmlFor="pricing-4">600.000 đến 900.000</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="pricing-5" />
                              <label htmlFor="pricing-5">900.000 đến 1.200.000</label>
                              <div className="number">68</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="wd-portlet">
                        <div className="wd-portlet-title">
                          <h2><a href="#">Khu vực</a></h2>
                        </div>
                        <div className="wd-portlet-body">
                          <ul className="wd-list-pricing wd-radio">
                            <li>
                              <input name="radio-oparator" type="checkbox" id="asia-1" />
                              <label htmlFor="asia-1">Trung tâm thành phố</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="asia-2" />
                              <label htmlFor="asia-2">Bán đảo Sơn Trà</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="asia-3" />
                              <label htmlFor="asia-3">Núi Bà Nà</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="pricing-4" />
                              <label htmlFor="asia-4">Gần sân bay</label>
                              <div className="number">6868</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="asia-5" />
                              <label htmlFor="asia-5">Biển Mỹ Khê</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="asia-6" />
                              <label htmlFor="asia-6">Bãi biển Bắc Mỹ An</label>
                              <div className="number">6868</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="asia-7" />
                              <label htmlFor="asia-7">Bãi biển Non Nước</label>
                              <div className="number">68</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="wd-portlet bdb1">
                        <div className="wd-portlet-title">
                          <h2><a href="#">Tiện nghi</a></h2>
                        </div>
                        <div className="wd-portlet-body">
                          <ul className="wd-list-pricing wd-radio">
                            <li>
                              <input name="radio-oparator" type="checkbox" id="facilities-1" />
                              <label htmlFor="facilities-1">Wifi</label>
                              <div className="number">686868</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="facilities-2" />
                              <label htmlFor="facilities-2">Bãi đậu xe</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="facilities-3" />
                              <label htmlFor="facilities-3">Hồ bơi</label>
                              <div className="number">6868</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="facilities-4" />
                              <label htmlFor="facilities-4">Nhà hàng</label>
                              <div className="number">68</div>
                            </li>
                            <li>
                              <input name="radio-oparator" type="checkbox" id="facilities-5" />
                              <label htmlFor="facilities-5">Gặt ủi</label>
                              <div className="number">68</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Reside;