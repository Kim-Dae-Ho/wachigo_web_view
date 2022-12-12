package com.wachigo.admin.service;

import com.wachigo.admin.entity.ServicezoneEntity;
import com.wachigo.admin.repository.ServicezoneRepository;
import lombok.AllArgsConstructor;

import java.util.List;

@org.springframework.stereotype.Service
@AllArgsConstructor
public class WachigoService {
    private ServicezoneRepository servicezoneRepository;

    public List <ServicezoneEntity> db_gps(){
        return servicezoneRepository.findAll();
    }
}