import "./styles.css";
import { usePageScroll } from "./useScroll";
import { ProgressIndicator } from "./progress-bar";
import { useState } from "react";
const repeater = Array.from({ length: 10 }, (i) => "i");

export default function App() {
  const [progress, setProgress] = useState(0); // Initial progress = 0;
  usePageScroll(setProgress);
  return (
    <div className="App">
      <div className="navigation">
        <ProgressIndicator progress={progress} />
      </div>
      {repeater.map((_, i) => (
        <p key={i}>
          Aute officia nulla deserunt do deserunt cillum velit magna. Officia
          veniam culpa anim minim dolore labore pariatur voluptate id ad est
          duis quis velit dolor pariatur enim. Incididunt enim excepteur do
          veniam consequat culpa do voluptate dolor fugiat ad adipisicing sit.
          Labore officia est adipisicing dolore proident eiusmod exercitation
          deserunt ullamco anim do occaecat velit. Elit dolor consectetur
          proident sunt aliquip est do tempor quis aliqua culpa aute. Duis in
          tempor exercitation pariatur et adipisicing mollit irure tempor ut
          enim esse commodo laboris proident. Do excepteur laborum anim esse
          aliquip eu sit id Lorem incididunt elit irure ea nulla dolor et. Nulla
          amet fugiat qui minim deserunt enim eu cupidatat aute officia do velit
          ea reprehenderit. Voluptate cupidatat cillum elit quis ipsum eu
          voluptate fugiat consectetur enim. Quis ut voluptate culpa ex anim
          aute consectetur dolore proident voluptate exercitation eiusmod. Esse
          in do anim magna minim culpa sint. Adipisicing ipsum consectetur
          proident ullamco magna sit amet aliqua aute fugiat laborum
          exercitation duis et.
        </p>
      ))}
    </div>
  );
}
