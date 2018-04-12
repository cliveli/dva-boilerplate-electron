import { create, getPath } from './window';

export default function init() {
  const win = create({ width: 800, height: 600 });
  win.loadURL(getPath());
}
