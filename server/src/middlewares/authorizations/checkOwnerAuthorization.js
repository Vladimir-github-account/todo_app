
export default async function (req, res, next) {
    const {userInfo: {userTasks}} = req;
    const {params: {taskId}} = req;
    req.userInfo.isOwner = userTasks.includes(Number(taskId))
        ? 'OWNER'
        : 'NOT_OWNER';
    next();
}