package com.wangin.admin.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSpringTableEntity is a Querydsl query type for SpringTableEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSpringTableEntity extends EntityPathBase<SpringTableEntity> {

    private static final long serialVersionUID = 1789055729L;

    public static final QSpringTableEntity springTableEntity = new QSpringTableEntity("springTableEntity");

    public final StringPath myInfo = createString("myInfo");

    public final StringPath myName = createString("myName");

    public final NumberPath<Long> myNumber = createNumber("myNumber", Long.class);

    public QSpringTableEntity(String variable) {
        super(SpringTableEntity.class, forVariable(variable));
    }

    public QSpringTableEntity(Path<? extends SpringTableEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSpringTableEntity(PathMetadata metadata) {
        super(SpringTableEntity.class, metadata);
    }

}

