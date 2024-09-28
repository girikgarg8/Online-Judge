const extractDetailsFromLog = (log) => {
    const { message, level } = JSON.parse(log);
    return { message, level };
};

module.exports =  extractDetailsFromLog ;