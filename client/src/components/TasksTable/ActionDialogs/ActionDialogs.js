import ActionDialog from './ActionDialog'

export const DeleteDialog = ({show, closeOnClickHandler, onClickHandler}) => (
    <ActionDialog
        show={show}
        title='Are you sure you want to Delete task Test SSL Monitor Task'
        onClickHandler={onClickHandler}
        closeOnClickHandler={closeOnClickHandler}
    >
)