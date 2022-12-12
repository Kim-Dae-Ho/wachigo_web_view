package com.wachigo.admin.controller;

import com.wachigo.admin.entity.ServicezoneEntity;
import com.wachigo.admin.service.WachigoService;
import lombok.AllArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/")
public class WachigoController {

    private WachigoService wachigoService;


    @GetMapping("/kakao")
    public Object kakaomap(Model model,
                           @RequestParam(required = false, defaultValue = "35.151497", value = "latitude") String latitude,
                           @RequestParam(required = false, defaultValue = "126.888035", value = "longitude") String longitude){
        model.addAttribute("latitude1",Float.parseFloat(latitude));
        model.addAttribute("longitude1",Float.parseFloat(longitude));
        System.out.println("위도값: " + latitude);
        System.out.println("경도값: " + longitude);

        List <ServicezoneEntity> servicezoneEntities = wachigoService.db_gps();

        System.out.println(servicezoneEntities.size());

        JSONObject final_object = new JSONObject();
        JSONArray list_array_info = new JSONArray();
        JSONObject info = new JSONObject();

        for (int i = 0; i < servicezoneEntities.size(); i++){
            info = new JSONObject();
            info.put("zone_name",servicezoneEntities.get(i).getZonename());
            info.put("gps_place", servicezoneEntities.get(i).getZonecenter());
            info.put("marker_img", servicezoneEntities.get(i).getMarker());
            info.put("address",servicezoneEntities.get(i).getAddress1());
            list_array_info.add(info);
            final_object.put("super", list_array_info);
        }
        String send_result = final_object.toJSONString();
        System.out.println(send_result);
        System.out.println(list_array_info);

        model.addAttribute("abc",list_array_info);



        System.out.println("kakao is ok.");
        return "html/index";
    }

}
