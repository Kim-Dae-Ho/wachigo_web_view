package com.wachigo.admin.repository;

import com.wachigo.admin.entity.ServicezoneEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import java.util.List;

public interface ServicezoneRepository extends JpaRepository<ServicezoneEntity, Long>, QuerydslPredicateExecutor<ServicezoneEntity> {

    List<ServicezoneEntity> findAll();

}