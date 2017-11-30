import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header className="header-container">
        <div id="header">
          <div className="mix_sun">&nbsp;</div>
          <div className="container">
            <div className="plane">&nbsp;</div>
            <div className="row">
              <div className="col-xs-6">
                <h1>
                  <a href="/"><img src="src/assets/images/front/logo.png" alt="" width="161" height="150" /></a>
                </h1>
              </div>
              <div className="col-xs-6">
                <div className="top_search">
                  <form className="form-inline">
                    <div className="form-group">
                      <input type="text" className="form-control input_search" placeholder="Tìm kiếm" />
                      <button type="submit" className="btn btn_search">
                        <i className="icons_search">&nbsp;</i>
                      </button>
                    </div>
                    <div className="form-group drop_laguage">
                      <select className="form-control select_search">
                        <option>Tiếng Việt</option>
                        <option>Tiếng Anh</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="airship_small">&nbsp;</div>
                <div className="airship_large">&nbsp;</div>
              </div>
            </div>
            <div className="cloud_one">&nbsp;</div>
            <div className="cloud_two">&nbsp;</div>
          </div>
        </div>
        <div id="menu">
          <div className="container">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="/">TRANG CHỦ</a></li>
                  <li><a href="/about">GIỚI THIỆU</a></li>
                  <li><a href="/news">TIN TỨC</a></li>
                  <li><a href="/reside">Lưu Trú</a></li>
                  <li><a href="/service">Dịch Vụ</a></li>
                  <li><a href="/map">BẢN ĐỒ</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
