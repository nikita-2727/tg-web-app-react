import React, { Component } from 'react'

const tg = window.Telegram.WebApp


class Header extends Component {
  render() {
    return (
        <>
            <button onClick={() => tg.close()}>gggg</button>
            <p>Добро пожаловать в React Online Store, {tg.initDataUnsafe.user.first_name}</p>
        </>
    )
  }
}

export default Header;
