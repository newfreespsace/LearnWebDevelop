


module.exports = async function vjudge(judge_state, problem, onProgress) {
    const compile = {
        status: 2, /* Done  2 : Failed */ 
        message: 'aaaaaaa'
    };
    // 对于每个测试点，status 的值对应不同状态
    /*
        OutputLimitExceeded   6,
        MemoryLimitExceeded   4,
        TimeLimitExceeded     5,
        WrongAnswer           2,
        RuntimeError          8,
        Invalid              -1,
        Accepted              1,
        PartiallyCorrect      3
    */
    const judge = {
        "subtasks": [
            {
              "cases": [
                {
                  "status": 0,
                  "result": {
                    "type": 6,
                    "time": 3,
                    "memory": 384,
                    "userError": "",
                    "userOutput": "",
                    "scoringRate": 1,
                    
                    
                    "systemMessage": "Exited with return code 0"
                  }
                }
              ],
            //   "status": 13,
              "score": 100
            }
          ]
    }

    onProgress({
        taskId: judge_state.task_id,
        type: 4 /* Finished 4 : Progress  3*/,
        progress: { compile: compile, judge: judge }
      });
}
