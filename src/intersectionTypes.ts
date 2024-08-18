type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
  drag: () => {},
  resize: () => {},
};
