import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const UpdateComponent = ({ children }) => {
    return React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            ...child.props,
            text: children.indexOf(child) + 1 + ". " + child.props.text
        });
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <UpdateComponent>
                <Component text="Компонент списка" />
                <Component text="Компонент списка" />
                <Component text="Компонент списка" />
            </UpdateComponent>
        </CollapseWrapper>
    );
};

const Component = ({ text }) => {
    return <div>{text}</div>;
};

Component.propTypes = {
    text: PropTypes.string
};

export default ChildrenExercise;
