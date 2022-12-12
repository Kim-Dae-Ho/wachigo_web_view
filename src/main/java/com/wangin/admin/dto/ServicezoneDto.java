package com.wangin.admin.dto;

import com.wangin.admin.entity.ServicezoneEntity;
import com.wangin.admin.entity.SpringTableEntity;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class ServicezoneDto {
    private Long pk;
    private String zonename;
    private String zonecenter;
    private String marker;
    private String address1;

    @Builder
    public ServicezoneDto(Long pk, String zonename, String zonecenter, String marker, String address1) {
        this.pk = pk;
        this.zonename = zonename;
        this.zonecenter = zonecenter;
        this.marker = marker;
        this.address1 = address1;
    }

    public ServicezoneEntity toEntity(){
        ServicezoneEntity entity = ServicezoneEntity.builder()
                .pk(pk)
                .zonename(zonename)
                .zonecenter(zonecenter)
                .marker(marker)
                .address1(address1)
                .build();
        return entity;
    }
}
