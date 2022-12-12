package com.wangin.admin.dto;

import com.wangin.admin.entity.SpringTableEntity;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class SpringTableDto implements Serializable {

    private Long myNumber;
    private String myName;
    private String myInfo;

    @Builder
    public SpringTableDto(Long myNumber, String myName, String myInfo) {
        this.myNumber = myNumber;
        this.myName = myName;
        this.myInfo = myInfo;
    }

    public SpringTableEntity toEntity(){
        SpringTableEntity entity = SpringTableEntity.builder()
                .myNumber(myNumber)
                .myName(myName)
                .myInfo(myInfo)
                .build();
        return entity;
    }
}
