import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import { useAppSelector } from "../../app/hooks";
import { addFirstBlock, removeLastBlock } from "./listSlice";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Block from "../../components/block/Block";
import "./List.css";

const TRANSITION_TIMEOUT = 500;

const List = () => {
  const { list } = useAppSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleAddBlock = () => {
    dispatch(addFirstBlock());
  };

  const handleRemoveBlock = () => {
    dispatch(removeLastBlock());
  };

  return (
    <div className="container">
      <div className="btn-wrapper">
        <Button variant="success" onClick={handleAddBlock} text="Add" />
        <Button
          variant="danger"
          onClick={handleRemoveBlock}
          text="Remove"
          disabled={!list.length}
        />
      </div>
      <TransitionGroup className="list-wrapper">
        {list.map((el) => (
          <CSSTransition
            key={el.id}
            timeout={TRANSITION_TIMEOUT}
            classNames={{
              enter: "list-item-enter",
              enterActive: "list-item-enter-active",
              exit: "list-item-exit",
              exitActive: "list-item-exit-active",
            }}
          >
            <Block bgColor={el.color} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default List;
