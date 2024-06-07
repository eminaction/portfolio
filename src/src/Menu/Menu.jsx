import "./Menu.css";

export default function Header() {
  return (
    <>
      <div id="menu" className="menu">
        <span className="bookmark1">
          <img src="/video-library-svgrepo-com-2.svg" width="18px" />
          iTube
        </span>
        <span className="bookmark1">
          <img src="/article-svgrepo-com-2.svg" width="18px" />
          Articles
        </span>
        <span className="bookmark1">
          <img src="/game-8-svgrepo-com.svg" width="18px" />
          Games
        </span>
        <span className="bookmark2">
          <img src="/folder-favourite-bookmark-svgrepo-com.svg" width="18px" />
          All Bookmarks
        </span>
      </div>
    </>
  );
}
