import { css } from 'lit';

export const styles = css`
  .dropdown {
    padding: 20px 40px;
    perspective: 1000px;
    position: relative;
    display: block;
    z-index: 100;
  }

  .dropdown:hover {
    cursor: pointer;
  }

  .dropdown:hover .dropdown-menu,
  .dropdown:hover .dropdown-menu .dropdown-item,
  .dropdown:hover .dropdown-menu ::slotted(*) {
    display: block;
  }

  .dropdown:hover .dropdown-menu ::slotted(*),
  .dropdown:hover .dropdown-menu.scaleY ::slotted(*), 
  .dropdown:hover .dropdown-menu.translateX ::slotted(*) {
    opacity: 1;
  }

  .dropdown-menu {
    display: none;
    opacity: 0;
    position: absolute;
    top: 80%;
    min-width: 280px;
    border: 1px solid #f3f3f3;
    border-radius: 2.8px;
    box-shadow: .5px 0px 0px .5px #f3f3f3;
    background-color: #fafafa;
  }

  .dropdown-menu.left {
    left: -3%;
  }

  .dropdown-menu.right {
    left: 3%;
  }

  .dropdown-menu .dropdown-item, .dropdown-menu ::slotted(*) {
    display: none;
    opacity: 0;
    padding: 8px 14px;
    list-style: none;
  }

  .dropdown-menu .dropdown-item:hover, .dropdown-menu ::slotted(*:hover) {
    background-color: rgba(40, 39, 39, 0.1);
  }

  .scaleY,
  .scaleY .dropdown-item,
  .scaleY ::slotted(*) {
    animation: scaleY 300ms ease-in-out forwards;
    transform-origin: top center;
  }

  .translateX.left,
  .translateX.left .dropdown-item,
  .translateX.left ::slotted(*) {
    animation: translateToLeft 420ms 100ms ease-in-out forwards;
    transform-origin: top center;
  }

  .translateX.right,
  .translateX.right .dropdown-item,
  .translateX.right ::slotted(*) {
    animation: translateToRight 420ms 100ms ease-in-out forwards;
    transform-origin: top center;
  }
`;
