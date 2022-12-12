package com.wangin.admin.predicate;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import com.wangin.admin.entity.QSpringTableEntity;

public class SpringTablePredicate {
    public static Predicate search(String selectKey, String titleText){
        QSpringTableEntity qSpringTableEntity = QSpringTableEntity.springTableEntity;

        BooleanBuilder builder = new BooleanBuilder();

        if(!selectKey.equals("전체")){
            if(selectKey.equals("이름")){
                builder.and(qSpringTableEntity.myName.contains(titleText));
            }
            else if(selectKey.equals("취미")){
                builder.and(qSpringTableEntity.myInfo.contains(titleText));
            }
        }
        else if(selectKey.equals("전체")){
            builder.and(qSpringTableEntity.myName.contains(titleText)).or
                    (qSpringTableEntity.myInfo.contains(titleText));
        }
        return builder;

    }
}
