db.grades.aggregate([
    {
        $project: {
            _id: 0,
            student_id: 1,
            class_id: 1,
            scores: {
                $filter: {
                    input: "$scores",
                    as: "score",
                    cond: {
                        $ne: ["$$score.type", "quiz"]
                    }
                }
            },
            scoresAvgStudent: { $avg: "$scores.score" }
        },
    },
    { $unwind: "$scores" },
    { 
        $group: {
            _id: {class_id: "$class_id"},
            scoresAvgClass: { $avg: "$scores.score" },
        }
    },
    { $sort: {scoresAvgClass: -1} },
    { $limit: 1 }
]).pretty()