package com.wangin.admin.repository;

import com.wangin.admin.entity.SpringTableEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import java.util.List;

public interface SpringTableRepository extends JpaRepository<SpringTableEntity, Long>, QuerydslPredicateExecutor<SpringTableEntity> {

    List<SpringTableEntity> findByMyNumber(Long mynumber);

}
