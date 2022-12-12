package com.wangin.admin.service;

import com.wangin.admin.entity.ServicezoneEntity;
import com.wangin.admin.repository.ServicezoneRepository;
import lombok.AllArgsConstructor;

import java.util.List;

@org.springframework.stereotype.Service
@AllArgsConstructor
public class ServicezoneService{
    private ServicezoneRepository servicezoneRepository;

    public List <ServicezoneEntity> db_gps(){
        return servicezoneRepository.findAll();
    }
}