import React, { useEffect, useState } from 'react';
import { useModal, Modal } from 'react-morphing-modal';
import './App.css';
import 'react-morphing-modal/dist/ReactMorphingModal.css';

function App() {
  const { modalProps, getTriggerProps } = useModal();

  const theDay = new Date('2007/04/23 00:00:00')

  const numberToIntString = (number: number): string => {
    if (number < 10) {
      return '0' + number.toString()
    }
    return number.toString()
  }

  const now = (): string => {
    const duration = Date.now() - theDay.getTime()
    const days = parseInt(String(duration / (1000 * 60 * 60 * 24)))
    const hours = parseInt(String((duration / (1000 * 60 * 60 * 24) - days) * 24))
    const minutes = parseInt(String((duration / (1000 * 60 * 60 * 24) - days) * 24 * 60)) - hours * 60
    const seconds = parseInt(String((duration / (1000 * 60 * 60 * 24) - days) * 24 * 60 * 60)) - hours * 3600 - minutes * 60
    return days.toString() + '.' + numberToIntString(hours) + '.' + numberToIntString(minutes) + '.' + numberToIntString(seconds)
  }

  const [date, setDate] = useState(now());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(now());
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div className="title">{date}</div>
      <div className="message">
        Life is very short, and there's no time for fussing and fighting, my friend.
      </div>
      <button className="button" {...getTriggerProps()}>Concept</button>
      <Modal {...modalProps} padding={true}>
        <div><img className="logo" src="logoS.png" alt="UROP"/></div>
        <div className="concept">
          <p>Life is very short , there' s no time for fussing and fighting, jude. (Beatles)<br/>
          人生は短い。やきもきしたり争ったりしてる時間はないんだよ。</p>
          <p>たとえば、２００７年４月２３日に一人の人間が命を絶ったとして<br/>
          仮に、残された僕らがその後しばらくの間、生かされるとする。</p>
          <p>果たして僕らは２００７年４月２３日に命を絶ったとされる一人の人間よりもどれだけ長く生かされてきたのか<br/>
            それを教えてくれる時計を用意しました。<br/>
          一秒経って、また一秒。血の通った「生」を積み重ねていきます。</p>
          <p>もしも、本当に２００７年４月２３日に命を絶った人間がいたとすれば<br/>
            僕らはその人の分もポジティブに暮らしていきたい。<br/>
          だって人生は短いんだ。</p>
          <p>とか言いながら、「ずいぶん長生きしたもんだ」という言葉を最期に人生の終焉を迎える頃<br/>
            この時計の日数はえらい事になっているに違いない。</p>
        </div>
        <div className="play">
          <a href="http://www.urop.jp/aquatic(fullversion).mp3" target="_blank" rel="noreferrer">Play</a>
        </div>
        <div className="contact">
          <a href="mailto:urophone@yahoo.co.jp">Contact</a>
        </div>
      </Modal>
    </div>
  );
}

export default App;
