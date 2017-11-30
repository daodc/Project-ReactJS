import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header id="gd-header-map">
        <h1 className="gd-title-hd"><a href="/" className="gd-logo-m"></a></h1>
        <div className="gd-header-map-r">
          <ul className="gd-user-login-hd mt5">
            <li className="gd-nt">
              <a className="gd-notifi-header">
                <i className="fa fa-bell-o fa-bell-o-cus"></i>
                <span className="gd-notifi-ct">
                  <span className="gd-notifi-nb">10</span>
                </span>
              </a>
            </li>
            <li className="gd-nt">
              <a href="#" className="gd-avatar-hd"><img className="gd-img-bd" src="/src/assets/images/front/img_daodc.jpg" alt="" height="34" width="34" /></a>
              <div className="dropdown gd-seting">
                <a href="#" id="dLabel" role="button" data-toggle="dropdown">DaoDC<i className="fa fa-caret-down ml10">&nbsp;</i></a>
                <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                  <li><a href="profile.html">DaoDC</a></li>
                  <li><a href="index.html">Logout</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="gd-search-header-map">
          <fieldset className="gd-search-map-form">
            <form role="form" action="/" method="post">
              <div className="form-group">
                <input type="text" id="search-input" className="gd-search-ip" placeholder="Nhập dịch vụ, lĩnh vực, địa chỉ..." />
                <button type="submit" className="bt-search"><i className="fa fa-search"></i>Tìm kiếm</button>
              </div>
            </form>
          </fieldset>
        </div>
      </header>
    );
  }
}
export default Header;
